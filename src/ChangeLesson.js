function ChangeLesson({lastlesson, nextlesson, lastname, nextname}) {
    return (
      <div className="btn-group botton-buttom margin-auto" role="group" aria-label="Basic checkbox toggle button group botton-buttom">
        <a href={lastlesson} className="btn btn-secondary btn-sm" role="button" >{lastname}</a>    
        <a href={nextlesson} className="btn btn-secondary btn-sm" role="button" >{nextname}</a>    
      </div>
    );
  }
  
  export default ChangeLesson;