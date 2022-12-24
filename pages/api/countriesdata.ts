import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handleCountriesData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/countries.json',
    'utf8'
  );
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}
