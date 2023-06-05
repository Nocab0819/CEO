function Lesson({ url, lastlesson, nextlesson, lastname, nextname}) {
  return (
    <div style={{ position: 'relative', height: '100vh'}}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="d-flex justify-content-center margin-top">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
      <div className='lesson-button' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 92px)' }}>
        <div className="btn-group button-buttom" role="group" aria-label="Basic checkbox toggle button group button-buttom" style={{ alignSelf: 'flex-end' }}>
          <a href={lastlesson} className="btn btn-secondary btn-lg" role="button">{lastname}</a>    
        </div>
        <iframe src={url} style={{ width: '800px', height: '100%', border: 'none', position: 'relative', zIndex: 1 }}></iframe>
        <div className="btn-group button-buttom"  role="group" aria-label="Basic checkbox toggle button group button-bottom" style={{ alignSelf: 'flex-end' }}>
          <a href={nextlesson} className="btn btn-secondary btn-lg" role="button">{nextname}</a>    
        </div>
      </div>
    </div>
  );
}
