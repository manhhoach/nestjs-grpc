import carbone from "carbone";
import * as fs from "fs";

export const renderPdf = async (data: any, input: string, ouput: string) => {
  carbone.render(input, data, function (err, result) {
    if (err) return console.log(err);
    fs.writeFileSync(ouput, result);
    return ouput;
  });
};
