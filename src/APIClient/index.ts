import {Axios} from "axios";
import buildMakeAPIClient from "./APIClient";

export default buildMakeAPIClient<{APIClient: typeof Axios }>({APIClient: Axios})
