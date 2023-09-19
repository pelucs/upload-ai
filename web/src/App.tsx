import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return(
    <div className="min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground">Desenvolvido com ❤ por pdlucs</span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="outline" className="flex items-center gap-2">
            <Github className="w-4 h-4"/>

            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 flex gap-6 p-6">
        <div className="flex flex-col flex-1 gap-6">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-5 leading-relaxed" 
              placeholder="Inclua o prompt para a IA..."
            />

            <Textarea 
              readOnly
              className="resize-none p-5 leading-relaxed outline-none" 
              placeholder="Resultado gerado pela IA..." 
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{`{transcription}`}</code> no seu prompt para adicionar o counteúdo da 
            transcrição do vídeo slecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video" 
              className="flex flex-col items-center justify-center gap-2 border rounded-md aspect-video border-dashed
              cursor-pointer text-muted-foreground hover:bg-primary/5 transition-all"
            >
              <FileVideo className="w-4 h-4"/>
              Selecione um vídeo
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only"/>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcpition_prompt">Prompt de transcrição</Label>
              
              <Textarea 
                id="transcpition_prompt" 
                className="h-20 resize-none leading-relaxed"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)."
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo 

              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator/>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt"/>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="title">Título para Youtube</SelectItem>
                  <SelectItem value="description">Descrição para Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>

              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>

              <span className="black text-muted-foreground text-xs italic">
                Você poderá customizar essa opção em breve.
              </span>
            </div>

            <Separator/>

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider
                min={0}
                max={1}
                step={0.1}
              />

              <span className="black text-muted-foreground text-xs italic leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
              </span>
            </div>

            <Separator/>

            <Button type="submit" className="w-full">
              Executar 
              
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}