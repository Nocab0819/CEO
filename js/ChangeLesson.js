function ChangeLesson({lastlesson, nextlesson, lastname, nextname}) {
    return (
      <div class="btn-group botton-buttom botton-top" role="group" aria-label="Basic checkbox toggle button group botton-buttom">
        <a href={lastlesson} class="btn btn-secondary btn-lg" role="button" >{lastname}</a>    
        <a href={nextlesson} class="btn btn-secondary btn-lg" role="button" >{nextname}</a>    
      </div>
    );
  }
  
  export default ChangeLesson;