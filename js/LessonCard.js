function LessonCard(){
    return(
      <section>
        <div className="container-fluid">
    <div className="bd-lesson">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="row">
            <div className="col">
            {/* 第一張卡片 */}
            <div className="card">
                <img src="img/class1-1-1.png" className="lesson-img bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-1.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON1</p>
                </div>
            </div>
            </div>
            <div className="col">
            {/* 第二張卡片 */}
            <div className="card">
                <div className="card">
                <img src="img/class1-2-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-2.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON2</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
            <div className="col">
            {/* 第三張卡片 */}
            <div className="card">
                <img src="img/class1-3-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-3.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON3</p>
                </div>
                </div>
            </div>
            <div className="col">
            {/* 第四張卡片 */}
            <div className="card">
                <img src="img/class1-4-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-4.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON4</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className="row">
            <div className="col">
            {/* 第五張卡片 */}
            <div className="card">
                <img src="img/class1-5-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-5.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON5</p>
                </div>
                </div>
            </div>
            <div className="col">
            {/* 第六張卡片 */}
            <div className="card">
                <img src="img/class1-6-1.png" className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: First slide" alt=""/>
                <div className="lesson-card-text">
                <p className="text-center lesson-title">
                    <a href="lesson1-6.html">
                    <button
                        type="button"
                        className="play-button btn-primary rounded-circle lesson-button"
                    ></button>
                    </a>
                    &ensp;LESSON6</p>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>
    </div>
</div>

</section>
    );
}