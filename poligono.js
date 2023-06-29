function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

export default class Poligono {
    #vertices;
    #n;

    constructor(vertices) {
        this.#n = vertices.length;
        this.#vertices = vertices;
        if(this.#n < 3) {
            throw new UserException("O Polígono precisa receber pelo menos 3 Vértices")
        }
    }

    get vertices() {
        return this.#vertices;
    }

    set verticesPoligono(vertices) {
        this.#vertices = vertices;
    }
    
    get n() {
        return this.#n;
    }

    get perimetro() {
        let p = this.vertices[0].distancia(this.vertices[this.n - 1]);
        for (let index = 0; index < this.vertices.length - 1; index++) {
            p = p + this.vertices[index].distancia(this.vertices[index + 1]);
        }

        return p;
    }

    get qtdVertices() {
        return this.#n;
    }

    addVertice(v) {
        for (let index = 0; index < this.vertices.length - 1; index++) {
            if(v.x == this.vertices[index].x && v.y == this.vertices[index].y) {
                return false;
            }
        }

        this.#vertices.push(v);
        this.#n++;

        return true;
    }

}