/**
 * @date 2021/8/15
 * @description complie code
 * @author axmand
 * @example
 * //inherit 
 * class BlockClass extends Compilable{ }
 */
class Compilable {

    private id: string;

    get ID() {
        return this.id;
    }

    protected regulatize = (): string => {
        return ``;
    }

    protected compile = (): string => {
        return ``;
    }

}

export { Compilable }