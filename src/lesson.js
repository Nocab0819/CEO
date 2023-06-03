function Lesson({ url}) {
    return (
        <div className="container-fluid">
        <div className='py-md-3 pl-md-5 bd-content' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '764px' }}>
            <iframe src={url} style={{ width: '800px', height: '100%', border: 'none' }}></iframe>
        </div>
      </div>
    );
  }
  
  export default Lesson;
