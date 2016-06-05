import fs from 'fs';
import path from 'path'

export default class JsonQuestionReader{
    refresh() {
        var QUESTIONS_FILE = path.join(__dirname, 'questions.json');
        var jsonQuestions = fs.readFile(QUESTIONS_FILE, (err, data) => {
            if(err) throw err;
            console.log(data)
            return data;
        });
        var questions = JSON.parse(jsonQuestions);
        console.log(`Matt has written ${length(questions)} questions`)
        return jsonQuestions;
    }
}