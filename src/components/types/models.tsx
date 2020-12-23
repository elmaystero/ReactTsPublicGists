export interface Owner{
    login:string;
    id:number;
    url:string;
}
export interface IGist{
    id:string;
    url:string;
    git_pull_url:string;
    created_at:Date;
    updated_at:Date;
    description:string;
    comments:number;
    comments_url:string;
    owner:Owner;
}