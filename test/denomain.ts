import {jsyaml} from "../src/libs/jsyaml.js";
import {CompoComp} from "../src/CompoComp.ts";

import {systemDataText} from './sample_system.js';
import {usecaseDataText as usecaseDataText_in} from './sample_usecase_in.js';
import {usecaseDataText as usecaseDataText_file} from './sample_usecase_file.js';

const usecaseData = [
  ...jsyaml.load(usecaseDataText_in),
  ...jsyaml.load(usecaseDataText_file)
]

// console.log(main(jsyaml.load(systemDataText), usecaseData, {bucFilter: ['他社状況同期']}));

var models = CompoComp.createModels(
  jsyaml.load(systemDataText), 
  usecaseData
);

console.log(CompoComp.toPlantUml(CompoComp.filterModels(models, ['他社状況同期'])))