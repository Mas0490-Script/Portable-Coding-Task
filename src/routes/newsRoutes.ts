import express, { Request, Response, Router } from 'express';
import { SingleStory } from '../models/SingleStory';

const router: Router = express.Router();

// GET /news/single/:id - Endpoint to retrieve a single news story by ID
// router.get('/article/:id', (req: Request, res: Response) => {
router.get('/article', (req: Request, res: Response) => {
    // extract the id from the url
    // const { id } = req.params; // could use either method. Deliberating on endpoint structure/layout
    const { id } = req.query; // I would expect this version to be more scalable

    // Check if the id was provided
    if (!id) { return res.status(404).json({ message: 'No ID provided' }); }

    // Fetch the news story by ID from data source
    const newsStory = fetchSingleNewsStoryById(id as string);

    // Check if the news story exists
    if (!newsStory) { return res.status(404).json({ message: 'News story not found' }); }

    // Create an instance of the SingleStory class
    const singleStory = new SingleStory(
        newsStory.id,
        newsStory.title,
        newsStory.articleLink,
        newsStory.publicationDate,
        newsStory.content,
        newsStory.image
    );

    // Return the single story as JSON response
    res.json(singleStory);
});


// would be better to implement this as part of a controller like 'NewsController' in src/controllers
function fetchSingleNewsStoryById(id: string): SingleStory | null {
    /* 
        In this function I would implement the logic to retrieve the news story by ID from a database of sorts
        (The actual database integration logic would be in the services folder though)
        and return the news story object if found, or null if not found
    */

    // ##############################################
    // Dummy data for testing the work sample - start
    // ##############################################
    const dummyNewsStories: SingleStory[] = [
        {
            id: "1", // in real life would likely use a GUID 
            title: 'Dummy News Story 1',
            articleLink: 'https://example.com/news/story1',
            publicationDate: new Date(),
            content: '<p>This is the content of the news story.</p>',
            image: 'https://example.com/images/story1.jpg',
        },
        {
            id: "2",
            title: 'Dummy News Story 2',
            articleLink: 'https://example.com/news/story2',
            publicationDate: new Date(),
            content: '<p>This is the content of another news story.</p>',
            image: 'https://example.com/images/story2.jpg',
        },
    ];
    // Find the news story with the provided ID
    const newsStory = dummyNewsStories.find((story) => story.id === id);
    // ############################################
    // Dummy data for testing the work sample - end
    // ############################################

    // return the fetched data
    return newsStory || null;
}


export default router;
