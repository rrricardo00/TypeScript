class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome:string, carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }
    public dizerNome():string {
        return this.nome
    }

    public dizerCarroPreferido():string{
        return this.carroPreferido
    }

    public comprarCarro(carro: any): void {
        this.carro = carro
    }

    public dizerCarroQueTem():any{
        return this.carro
    }
}

let carroA = new Carro('Honda', 4)
let carroB = new Carro('FIAT', 2)
let carroC = new Carro('GOL', 4)

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Rual Tal, Av Tal, nº XX', listaDeCarros)

let cliente = new Pessoa('João', 'Honda')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  carro['modelo'] == cliente.dizerCarroPreferido() && cliente.comprarCarro(carro) 
})

console.log(cliente.dizerCarroQueTem())