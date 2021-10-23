import path from 'path';
import dotenvsafe from 'dotenv-safe';

const cwd = process.cwd();
console.log({cwd});

export const root = path.join.bind(cwd);

dotenvsafe.config({
    path: root('.env'),
    sample: root('.env.example')
});

export const PORT = process.env.PORT ?? '3233';
