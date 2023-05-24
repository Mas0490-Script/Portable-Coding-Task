export class SingleStory {
    public id: string;
    public title: string;
    public articleLink: string;
    public publicationDate: Date;
    public content: string;
    public image?: string;

    constructor(
        id: string,
        title: string,
        articleLink: string,
        publicationDate: Date,
        content: string,
        image?: string
    ) {
        this.id = id;
        this.title = title;
        this.articleLink = articleLink;
        this.publicationDate = publicationDate;
        this.content = content;
        this.image = image;
    }
}
