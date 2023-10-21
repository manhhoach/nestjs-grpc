import carbone from "carbone";
import * as fs from "fs";

export const renderPdf = async () => {
  let data: any = [];
  carbone.render(
    "./node_modules/carbone/examples/flat_table.ods",
    data,
    function (err, result) {
      if (err) return console.log(err);
      fs.writeFileSync("flat_table_result.ods", result);
    }
  );
  return "flat_table_result.ods";
};
