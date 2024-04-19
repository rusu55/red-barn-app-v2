import _ from "lodash";
export default function convertString(data: string){
    const str = _.replace(data, '\n', '<br />') 
    return str
}