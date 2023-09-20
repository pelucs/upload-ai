import 'dotenv/config'
import { OpenAI } from "openai";

export const openai = new OpenAI({
  apiKey: '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'
});