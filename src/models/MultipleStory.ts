export class MultipleStory {
    public id: string;
    public title: string;
    public articleLink: string;
    public publicationDate: Date;
    public image?: string;
    public summary?: string;

    constructor(
        id: string,
        title: string,
        articleLink: string,
        publicationDate: Date,
        image?: string,
        summary?: string
    ) {
        this.id = id;
        this.title = title;
        this.articleLink = articleLink;
        this.publicationDate = publicationDate;
        this.image = image;
        this.summary = summary;
    }
}