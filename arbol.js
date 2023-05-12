export class TreeNode {
    constructor(value, level, parent = null) {
        this.value = value;
        this.parent = parent;
        this.children = [];
        this.level = level;
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get hasChildren() {
        return !this.isLeaf;
    }

    childrenHasValue(value) {
        let index = 1;
        for (let node of this.children) {
            if (node.value === value) {
                return index;
            }
            index++;
        }
        return false;
    }
}

export class Tree {
    constructor(value) {
        this.root = new TreeNode(value, 0);
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    *postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    hasParentsValue(node, value) {
        if (node.value === value) {
            return true;
        } else {
            if (node.parent != null) {
                return this.hasParentsValue(node.parent, value);
            }
        }
    }

    insert(value, level) {
        let ok = false;

        for (let node of this.preOrderTraversal()) {
            if (node.level === (level - 1)) {
                if (!node.childrenHasValue(value)) {
                    if (!this.hasParentsValue(node, value)) {
                        node.children.push(new TreeNode(value, node.level + 1, node));
                        ok = true;
                    }
                }
            }
        }
        return ok;
    }

    remove(value, level) {
        let ok = false;

        for (let node of this.preOrderTraversal()) {
            if (node.level === (level - 1)) {
                let index = node.childrenHasValue(value);
                if (index != false) {
                    node.children.splice((index - 1), 1);
                }
            }
        }
        return ok;
    }

    existsNodeInLevel(level) {
        for (let node of this.preOrderTraversal()) {
            if (node.level === (level - 1)) {
                if (node.children.length != 0) {
                    return true;
                }
            }
        }
        return false;
    }

    existsRolInLevel(rol, level) {
        for (let node of this.preOrderTraversal()) {
            if (node.level === level && node.value === rol) {
                return true;
            }
        }
        return false;
    }

    getRoutes(rol, level) {
        let routes = [];

        for (let node of this.preOrderTraversal()) {
            let route = [];

            if (node.level === level && node.value === rol && node.isLeaf) {
                route.push(node.value);
                for (let nivel = level - 1; nivel > 0; nivel--) {
                    let parent = "node" + ".parent".repeat(level - nivel) + ".value";
                    let valueParent;
                    eval(`valueParent = ${parent};`)
                    eval("route.push(valueParent);")
                }
                routes.push(route);
            }
        }
        return routes;
    }
}