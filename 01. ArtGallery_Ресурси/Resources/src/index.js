import { express } from "../node_modules/express/lib/express.js";

const app = express();

app.listen(5000, ()=>{console.log('Server is listening on port 5000...')})