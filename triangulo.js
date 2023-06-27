function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

export default class Triangulo {
    #v1;
    #v2;
    #v3;

    constructor(v1, v2, v3) {
        if (this.#verificaTriangulo(v1, v2, v3)) {
            this.#v1 = v1;
            this.#v2 = v2;
            this.#v3 = v3;
        } else {
            throw new UserException("Estes vértices não resultam em um triângulo");
        }
    }

    get v1() {
        return this.#v1;
    }

    set v1(v1) {
        this.#v1 = v1;
    }

    get v2() {
        return this.#v2;
    }

    set v2(v2) {
        this.#v2 = v2;
    }

    get v3() {
        return this.#v3;
    }

    set v3(v3) {
        this.#v3 = v3;
    }

    get perimetro() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        return d1 + d2 + d3;
    }

    get area() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);
        let p = this.perimetro;

        let s = p/2;
        let a = Math.sqrt((s * (s - d1) * (s - d2) * (s - d3)));

        return a;
    }

    equals(t2) {
        if (this.v1 == t2.v1 && this.v2 == t2.v2 && this.v3 == t2.v3) {
            return true;
        }

        return false;
    }

    tipo() {
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        if(d1 != d2 && d1 != d3 && d2 != d3) {
            return "escaleno";
        }

        if((d1 == d2 && d1 != d3 && d2 != d3) || (d2 == d3 && d2 != d1 && d3 != d1) || (d1 == d3 && d1 != d2 && d3 != d2)) {
            return "isósceles";
        }

        if(d1 == d2 && d1 == d3 && d2 == d3) {
            return "equilátero";
        }
    }

    clone() {
        let t = new Triangulo(this.v1, this.v2, this.v3);
        return t;
    }

    #verificaTriangulo(v1, v2, v3) {
        let d1 = v1.distancia(v2);
        let d2 = v2.distancia(v3);
        let d3 = v3.distancia(v1);

        if ((Math.abs(d2 - d3) < d1 && d1 < d2 + d3) && (Math.abs(d1 - d3) < d2 && d2 < d1 + d3) && (Math.abs(d1 - d2) < d3 && d3 < d1 + d2)) {
            return true;
        }

        return false;
    }
}