export class Product {
    constructor(
        public id: number,
        public name: string,
        public slug: string,
        public description: string,
        public content: string,
        public price: string,
        public image: string,
        public admin_id: string,
        public category_id: number,
        public created_at: string,
        public modified_at: string
    ) {}
}