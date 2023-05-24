import express, { Request, Response } from 'express';
import morgan from 'morgan';
import newsRoutes from './src/routes/newsRoutes';

const app = express();

// Configure logging
app.use(morgan('combined'));

// Mount the news routes
app.use('/news', newsRoutes);

// Test endpoint
app.get('/test', (req: Request, res: Response) => {
    res.send('Test endpoint is working!');
});

// Log the stack of routes
// console.log(app._router.stack);

// Start the Express server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    // =======================
    // troubleshooting - start
    // =======================
    // Check if the news routes were mounted successfully
    const newsRoutesLayer = app._router.stack.find((layer: any) => layer.regexp.test('/news'));
    if (newsRoutesLayer) {
        console.log('News routes mounted successfully.');
    } else {
        console.log('News routes failed to mount.');
    }
    // =====================
    // troubleshooting - end
    // =====================
});
