export class Posts {
  id: number;
  src_img: string;
  type: number;
  title: string;
  desc: string;
  id_user: number;
  created_at: string;
  updated_at: string

  constructor( id: number,
    src_img: string,
    type: number,
    title: string,
    desc: string,
    id_user: number,
    created_at: string,
    updated_at: string) {
    this.id = id;
    this.src_img = src_img;
    this.type = type;
    this.title = title;
    this.desc = desc;
    this.id_user = id_user;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}