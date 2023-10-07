 export class Product{
  public id:number;
  public title:string;
  public imagepath:string;
  public description:string;
  public quantity:number;
  public price:number;
  
  public comments:string[];

  constructor(id:number,title:string,imagepath:string,description:string,quantity:number,price:number,comments:string[]=[])
  {
    this.id=id;
    this.title=title;
    this.description=description;
    this.imagepath=imagepath;
    this.quantity=quantity;
    this.price=price;
    this.comments=comments;
  }

 }