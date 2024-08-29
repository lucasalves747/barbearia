class Tabelas {

    init(conexao) {
        this.conexao = conexao
        //this.createTableClientes()
        this.createTableBarbearia()
        //this.createTableServico()
        //this.createTableBarbearia()
    }

    createTableClientes() {
        const sql = `create table if not exists CLIENTES (
        id int not null auto_increment primary key,
        nome varchar(100) not null,
        email varchar(100) not null,
        whatsApp varchar(18),
        barbeariaId int foreing key reference BARBEARIA(id),
        foto text)`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela cliente nao foi criada " + err)
                return;
            }
            console.log("tabela cliente criada com sucesso")
        })
    }

    createtableDisponibilidade() {
        const sql = `create table if not exists DISPONIBILIDADES(
        id int not null auto_increment primary key,
        dias varchar(255),
        horarioInicio time,
        horarioFim time,
        porficionalId int foreing key PROFICIONAL(id) unique
        )`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela disponibilidade nao foi criada " + err)
                return;
            }
            console.log("tabela disponibilidade criada com sucesso")
        })
    }

    createTableServico() {
        const sql = `create table if not exists SERVICOS (
        id int not null auto_increment primary key,
        nome varchar(100) not null,
        descricao text,
        valor decimal,
        duracao time,
        barbeariaId int foreing key reference BARBEARIA(id))`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela serviço nao foi criada" + err)
                return;
            }
            console.log("tabela serviço criada com sucesso")
        })
    }

    creteTableProficional() {
        const sql = `create table PROFICIONAL(
        login varchar(150) not null,
        senha varchar(255) not null,
        nome varchar(100) not null,
        whatsApp varchar(18) not null,
        disponibilidadeHorariosId foreign reference DISPOÇNIBILIDADES(id)
        barbeariaId int foreing key reference BARBEARIA(id)
        )`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela nao foi criada")
                return;
            }
            console.log("tabela criada com sucesso")
        })
    }

    createTableAgendamento() {
        const sql = `create table AGENDA(
        id int not null auto_increament primary key
        dia date not null
        hora time,
        duracao time,
        servicoId foreing key references SERVICOS(id)
        clienteId foreing key references CLIENTES(id)
        proficionalId foreing key references PROFICIONAL(id)
        Status enum('agendado','realizado','cancelado') default 'agendado')`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela nao foi criada " + err)
                return;
            }
            console.log("tabela criada com sucesso")
        })
    }

    createTableAvaliacaoDoAtendimento() {
        const sql = `create table if not exists AVALIACAO_ATENDIMENTO(
        id int not null auto_increment primary key,
        clienteId int foreing key references CLIENTES(id),
        descricao text,
        estrelas decimal,
        dataAvaliacao date,
        proficionalId int foreing key references PROFICIONAL(id))`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela nao foi criada " + err)
                return;
            }
            console.log("tabela criada com sucesso")
        })
    }

    createTableUsers() {
        const sql = `create table if not exists USERS(
        id int not null auto_incremente primary key,
        login varchar(255),
        password varchar(255),
        barbeariaid int foreing key reference BARBEARIA(id),
        athorizacao enum('funcionario','cliente') default 'cliente)`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log("tabela users nao foi criada")
                return;
            }
            console.log("tabela users criada")
        })
    }

    createTableBarbearia() {

        const sql = `create table if not exists barbearia(
        id int auto_increment primary key,
        nome varchar(100))`

        this.conexao.query(sql,(err,result)=>{
            if(err){
                console.log(`tabela barbearia nao foi criada: ${err}`)
                return;
            }
            console.log("tabela criada com sucesso")
        })

    }
}

module.exports = new Tabelas()