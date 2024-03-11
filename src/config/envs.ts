import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    //DISCORD_HOOK_URL: get('DISCORD_HOOK_URL').required().asString()
}