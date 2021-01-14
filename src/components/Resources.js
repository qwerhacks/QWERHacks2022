import React from "react";

function Resources(props) {

  return (
    <div>
      <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px" />
      <h1>RESOURCES</h1>
      {/* mlh code of conduct */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">mlh code of conduct</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">please read through this before participating in our event!</a>
        </div>
      </div>

      {/* how to safely attend qwerhacks */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://drive.google.com/file/d/15draOrpYUXQrvzcShnqW3ziShfaRQSP-/view?usp=sharing" target="_blank">how to safely attend our hackathon</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://drive.google.com/file/d/15draOrpYUXQrvzcShnqW3ziShfaRQSP-/view?usp=sharing" target="_blank">
            we affirm our commitment to making participation in this hackathon discreet, and we will work with participants every
            step of the way to ensure their comfort and safety. in the following guide, we’re going to be offering our own tips,
            tricks, and advice as to how you can attend this hackathon safely!
          </a>
        </div>
      </div>

      {/* how to attend a virtual hackathon */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://drive.google.com/file/d/1QV9o3asHa10RkXd8lsvC3fkjKIG7kq-z/view?usp=sharing" target="_blank">how to attend a virtual hackathon</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://drive.google.com/file/d/1QV9o3asHa10RkXd8lsvC3fkjKIG7kq-z/view?usp=sharing" target="_blank">
            Are you scared of attending your first hackathon? Are you a hackathon veteran who’s never attended a virtual one before? Then this guide is for you!
          </a>
        </div>
      </div>

      {/* judging criteria */}

      {/* to survive on this shore */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.tosurviveonthisshore.com/" target="_blank">to survive on this shore</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.tosurviveonthisshore.com/" target="_blank">
            photographs and interviews with transgender and gender nonconforming older adults: a project by jess t. dugan and vanessa fabbre
          </a>
        </div>
      </div>

      {/* creating a trans inclusive workspace */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://hbr.org/2020/03/creating-a-trans-inclusive-workplace" target="_blank">creating a trans inclusive workspace</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://hbr.org/2020/03/creating-a-trans-inclusive-workplace" target="_blank">
            only when people feel totally authentic and connected with their organizations can they achieve their full potential at work!
          </a>
        </div>
      </div>

      {/* te reo māori speech recognition: a story of community, trust, and sovereignty */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.youtube.com/watch?v=sGQy0r_icWc" target="_blank">te reo māori speech recognition: a story of community, trust, and sovereignty</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.youtube.com/watch?v=sGQy0r_icWc" target="_blank">
            keoni mahelona discusses the collection of 300+ hours of labeled speech corpus which enabled the creation of an automatic speech recognizer using mozilla’s deepspeech. they now use it to accelerate the transcription of native speaker archives, using tech to create systems that preserve indigenous languages.
          </a>
        </div>
      </div>

      {/* whose land */}
      <div class="qanda">
        <div class="question">
          <a class="code-of-conduct" href="https://www.whose.land/en/" target="_blank">whose land</a>
        </div>
        <div class="answer">
          <a class="code-of-conduct" href="https://www.whose.land/en/" target="_blank">
            since we're all going to be in different places for qwer hacks this year, take a moment to figure out and acknowledge the land you're on:)
          </a>
        </div>
      </div>

    </div>



  );

}

export default Resources;