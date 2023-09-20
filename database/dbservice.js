import * as SQLite from 'expo-sqlite';


export function getDbConnection() {
    const cx = SQLite.openDatabase('dbProdutos.db');
    return cx;
}

export async function createTable() {
    return new Promise((resolve, reject) => {
        const query = `
        CREATE TABLE IF NOT EXISTS tbProdutos
        (
            id TEXT not null primary key,
            descricao TEXT not null,
            preco TEXT not null          
        )`;

        const queryTbVenda = `CREATE TABLE IF NOT EXISTS tbVendas
        (
            id_vendas TEXT not null primary key,
            data_venda TEXT,
            valorTotal TEXT
        )`;

        const queryTbVendaProduto = `CREATE TABLE IF NOT EXISTS tbVendaProduto
        (
            fk_vendas TEXT not null,
            fk_produto TEXT not null,
            FOREIGN KEY (fk_vendas) REFERENCES tbVendas(id_vendas),
            FOREIGN KEY (fk_produto) REFERENCES tbProdutos(id)
        )`
        
        

        let dbCx = getDbConnection();        
        
        dbCx.transaction(tx => {
            tx.executeSql(query);
            tx.executeSql(queryTbVenda);
            tx.executeSql(queryTbVendaProduto);
            /*tx.executeSql(`INSERT INTO tbProdutos VALUES ('asdasd', 'Caça Mitsubishi A6M2 Zero', '2500.00'`);
            tx.executeSql(`INSERT INTO tbProdutos VALUES ('akhfas', 'Bombardeiro Aichi D2Y', '3000.00')'`);
            tx.executeSql(`INSERT INTO tbProdutos VALUES ('iauyfd', 'Torpedeiro Nakajima B5N2', '2900.00')'`);*/
            resolve(true); 
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
};
export async function createTableVenda() {
    return new Promise((resolve, reject) => {
        const queryTbVenda = `CREATE TABLE IF NOT EXISTS tbVendas
        (
            id_vendas TEXT not null primary key,
            data_venda TEXT,
            valorTotal TEXT
        )`;

        let dbCx = getDbConnection();        
        
        dbCx.transaction(tx => {
            tx.executeSql(queryTbVenda);
            resolve(true); 
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
};
export async function createTableVendaProduto() {
    return new Promise((resolve, reject) => {
        const queryTbVendaProduto = `CREATE TABLE IF NOT EXISTS tbVendaProduto
        (
            fk_vendas TEXT,
            fk_produto TEXT,
            FOREIGN KEY (fk_vendas) REFERENCES tbVendas(id_vendas),
            FOREIGN KEY (fk_produto) REFERENCES tbProdutos(id)
        )`

        let dbCx = getDbConnection();        
        
        dbCx.transaction(tx => {
            tx.executeSql(queryTbVendaProduto);
            resolve(true); 
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    });
};




export function obtemTodosProdutos() {

    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = 'select * from tbProdutos';
            tx.executeSql(query, [],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            id: registros.rows.item(n).id,
                            descricao: registros.rows.item(n).descricao,
                            preco: registros.rows.item(n).preco
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}


export function obtemProduto(idProduto) {
    return new Promise((resolve, reject) => {
      console.log('Obtendo produto');
      let dbCx = getDbConnection();
      dbCx.transaction(tx => {
        let query = 'SELECT * FROM tbProdutos WHERE id=?';
        tx.executeSql(query, [idProduto], (tx, registros) => {
          if (registros.rows.length === 1) {
            // Se houver uma única linha de resultado, retorne-a
            const produto = registros.rows.item(0);
            resolve({
              id: produto.id,
              descricao: produto.descricao,
              preco: produto.preco
            });
          } else {
            // Se nenhum registro ou mais de um registro for encontrado, retorne null
            resolve(null);
          }
        });
      }, error => {
        console.log(error);
        resolve(null);
      });
    });
  }


export function adicionaProdutos(produto) {

    return new Promise((resolve, reject) => {
        let query = 'insert into tbProdutos (id, descricao, preco) values (?,?,?)';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [produto.id, produto.descricao, produto.preco],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}


export function alteraProdutos(produto) {
    console.log('começando o método alteraProdutos');
    return new Promise((resolve, reject) => {
        let query = 'update tbProdutos set descricao=?, preco=? where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [produto.descricao, produto.preco, produto.id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}



export function excluiProdutos(id) {
    console.log('Apagando produto ' + id);
    return new Promise((resolve, reject) => {
        let query = 'delete from tbProdutos where id=?';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [id],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )
    }
    );
}


export function excluiTodosProdutos() {
    console.log("Apagando todos os produtos...");
    return new Promise((resolve, reject) => {
        let query = 'delete from tbProdutos';
        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            tx.executeSql(query, [],
                (tx, resultado) => resolve(resultado.rowsAffected > 0)
            );
        },
            error => {
                console.log(error);
                resolve(false);
            }
        );
    }
    );
}

export function adicionaVenda(venda, produtos) {

    return new Promise((resolve, reject) => {
        let query = 'insert into tbVendas (id_vendas, data_venda, valorTotal) values (?,?,?)';
        let dbCx = getDbConnection();

        dbCx.transaction(tx => {
            tx.executeSql(query, [venda.id_vendas, venda.data_venda, venda.valorTotal],
                (tx, resultado) => {
                    resolve(resultado.rowsAffected > 0);
                })
        },
            error => {
                console.log(error);
                resolve(false);
            }
        )

        for(let i = 0; i < produtos.length; i++) {
            let query = 'insert into tbVendaProduto (fk_vendas, fk_produto) values (?,?)';
            let dbCx = getDbConnection();

            dbCx.transaction(tx => {
                tx.executeSql(query, [venda.id_vendas, produtos[i].id],
                    (tx, resultado) => {
                        resolve(resultado.rowsAffected > 0);
                    })
            },
                error => {
                    console.log(error);
                    resolve(false);
                }
            )
        }
    }
    );
}

export function obterTodasVendas() {

    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = 'select * from tbVendas';
            tx.executeSql(query, [],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            id_vendas: registros.rows.item(n).id_vendas,
                            data_venda: registros.rows.item(n).data_venda,
                            valorTotal: registros.rows.item(n).valorTotal
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}

export function obterTodosOsProdutosDaVenda(idVenda) {

    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = 'SELECT tabelaProdutos.* FROM tbProdutos AS tabelaProdutos INNER JOIN tbVendaProduto ON tabelaProdutos.id = tbVendaProduto.fk_produto WHERE tbVendaProduto.fk_vendas = ?';
            console.log('id venda dentro: ' + idVenda);
            tx.executeSql(query, [idVenda],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            id: registros.rows.item(n).id,
                            descricao: registros.rows.item(n).descricao,
                            preco: registros.rows.item(n).preco
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}

export function experimento(idVenda) {

    return new Promise((resolve, reject) => {

        let dbCx = getDbConnection();
        dbCx.transaction(tx => {
            let query = 'SELECT * FROM tbVendaProduto WHERE fk_vendas = ?';
            tx.executeSql(query, [idVenda],
                (tx, registros) => {

                    var retorno = []

                    for (let n = 0; n < registros.rows.length; n++) {
                        let obj = {
                            fk_vendas: registros.rows.item(n).fk_vendas,
                        }
                        retorno.push(obj);
                    }
                    resolve(retorno);
                })
        },
            error => {
                console.log(error);
                resolve([]);
            }
        )
    }
    );
}
