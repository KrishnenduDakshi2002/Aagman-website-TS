import {lazy} from 'react';

export function LazyLoad(filePath:string , namedExport:any){
    return lazy(()=>{
        const promise = import(filePath);
        if(namedExport == null) return promise;
        else return promise.then(module => ({default : module[namedExport]}))
    })
}