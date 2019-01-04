import Edge from './edge'; //Import class batas tepi
import Node from './node'; //Import class node

const NUMBERS = [0, 1, 2, 3, 4, 5, 6];

const randomCollection = (c) => {
    let x = 0;
    for (let i = 0, max = c.length; i < max; i++) {
        if (Math.random() < 1 / (x + 1)) {
            x = i;
        }
    }
    return x;
}

class Graphs {
    constructor(size = 3) {
        this.size = size;
        this.nodes = {};
        this.edge_node = {};

        for (let i = 0; i < size * size; i++) {
            this.nodes[i] = new Node(i, randomCollection(NUMBERS));
        }

        this.allEdgeWeights();
    }



    allEdgeWeights() {
        Object.keys(this.nodes).forEach((params_id) => {
            this.setEdgeWeight(params_id)
        });
    }

    updateColor(id, color) {
        this.nodes[id].color = color;
    }

    sameColor(A, B) {
        return this.nodes[A].color === this.nodes[B].color;
    }

    setEdgeWeight(id) {
        let node = this.nodes[id];
        let id_node = node.id;

        let edges = [];

        let top_pos = id_node - this.size;
        let right_pos = id_node + 1;
        let bottom_pos = id_node + this.size;
        let left_pos = id_node - 1;


        if (top_pos >= 0) {
            let w = this.sameColor(id_node, top_pos) ? 0 : 1;
            edges.push(new Edge(id_node, top_pos, w));
        }

        if (right_pos % this.size > 0) {
            let w = this.sameColor(id_node, right_pos) ? 0 : 1;
            edges.push(new Edge(id_node, right_pos, w));
        }

        if (bottom_pos < this.size * this.size) {
            let w = this.sameColor(id_node, bottom_pos) ? 0 : 1;
            edges.push(new Edge(id_node, bottom_pos, w));
        }

        if (id_node % this.size !== 0) {
            let w = this.sameColor(id_node, left_pos) ? 0 : 1;
            edges.push(new Edge(id_node, left_pos, w));
        }


        this.edge_node[id_node] = edges;
    }


    fillColor(color) {
        let see_id = [];
        let processing = [0]; // starting at the top left corner (this is a stack)
        let list_update_edge_weights = [];
        while (processing.length > 0) {
            let current_node = processing.pop();
            this.updateColor(current_node, color);
            see_id.push(current_node);
            this.edge_node[current_node].forEach((param_edge) => {
                if (see_id.indexOf(param_edge.finish_id) > -1) {
                    return;
                }

                if (param_edge.weight === 0) {
                    processing.push(param_edge.finish_id); // process it there is no weight cost
                }

                if (param_edge.weight === 1 && this.nodes[current_node].color === color) {
                    list_update_edge_weights.push(current_node); // update the edge weghts after we finish color filling
                }
            });
        }
        list_update_edge_weights.forEach((param_id) => this.setEdgeWeight(param_id));
    }
}

export default Graphs;