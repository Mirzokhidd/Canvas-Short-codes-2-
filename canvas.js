window.addEventListener('load', () =>  {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    //Size
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    //EventListeners

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    var deleteButton = document.getElementById("delete");

    deleteButton.addEventListener ("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });

});


