import { fastify } from 'fastify'
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateIaCompletionRoute } from './routes/generate-ia-completion';

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateIaCompletionRoute);

app.listen({
  port: 3333
})
.then(() => {
  return console.log("HTTP Server running!")
})