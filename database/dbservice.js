import * as SQLite from 'expo-sqlite';


export function getDbConnection() {
    const cx = SQLite.openDatabase('dbProdutos.db');
    return cx;
}

export async function createTable() {
    return new Promise((resolve, reject) => {
        const query = `CREATE TABLE IF NOT EXISTS tbProdutos
        (
            id text not null primary key,
            descricao text not null,
            preco text not null          
        )`;

        let dbCx = getDbConnection();        
        
        dbCx.transaction(tx => {
            tx.executeSql(query);
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
