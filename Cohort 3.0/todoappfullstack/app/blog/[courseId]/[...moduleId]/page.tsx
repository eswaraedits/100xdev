export default function({params}:any){
   const courseId = params.courseId
   const moduleId = params.moduleId
   return <div>
    {courseId}
    {JSON.stringify(moduleId)} //js cant do moduelid directly as its an array so we stringify
   </div>
}

//OBJECT DESTRUCTURING 
   /*  function sum(...numbers) {
        let total = 0;
        for (const num of numbers) {
            total += num;
        }
        return total;
    }

    console.log(sum(1, 2, 3));      // Output: 6
    console.log(sum(10, 20, 30, 40)); // Output: 100 */