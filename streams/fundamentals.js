// Streams ->
// Stream são fluxos de dados que podem ser lidos ou escritos de forma contínua.

// O que o método .pipe() faz é pegar o output de um stream e passar como input para outro stream.

// Buffers são arrays de bytes que representam dados binários.

// Qual é o método usado para criar um Buffer a partir de uma string no Node.js? Buffer.from()

// O que são Chunks em Streams no Node.js? São pedaços de dados que são passados de um stream para outro.

// O que são middlewares? São funções que recebem um input, fazem alguma operação e retornam um output. 
// São muito usados em frameworks web para tratar requisições HTTP.

// É possível definir middlewares globais (que são executados em TODAS rotas da aplicação)? Sim, é possível.




// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())
