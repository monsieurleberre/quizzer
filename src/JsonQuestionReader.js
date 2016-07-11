import fs from 'fs';
import path from 'path'

export default class JsonQuestionReader{
    refresh() {
        let questionFile = path.join(__dirname, 'questions.json');
        let jsonQuestions = fs.readFile(questionFile, (err, data) => {
            if(err) throw err;
            console.debug(data)
            return data;
        });
        let questions = JSON.parse(jsonQuestions);
        console.debug(`Matt has written ${length(questions)} questions`)
        return jsonQuestions;
    }
}