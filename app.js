$(document).ready(function() {
  $('img').on('click', function() {
    var src = $(this).attr('src');
    $('body').append('<div id="lightbox"><img src="' + src + '"><div id="close">X</div></div>');
    $('#lightbox').css({
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'background': 'rgba(0, 0, 0, 0.8)',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    });
    $('#lightbox img').css('max-width', '90%');
    $('#close').css({
      'position': 'absolute',
      'top': '10px',
      'right': '10px',
      'color': '#fff',
      'cursor': 'pointer',
      'font-size': '24px'
    });
  });

  $(document).on('click', '#close', function() {
    $('#lightbox').remove();
  });
});

$(document).ready(function() {
  var text = "點分頁! 看看有什麼吧!"; // 你想要顯示的文字
  var index = 0;

  function typeEffect() {
    if (index < text.length) {
      $('#typeEffect').append(text[index]); // 每次增加一個字
      index++;
      setTimeout(typeEffect, 100); // 控制每個字出現的速度 (100 毫秒)
    }
  }

  typeEffect(); // 啟動打字效果
});

$(document).ready(function() {
  $('img').hover(function() {
    $(this).css('opacity', '0.8');  // 滑鼠懸停時改變透明度
  }, function() {
    $(this).css('opacity', '1');  // 滑鼠移開時還原
  });
});

$(document).ready(function() {
  $('#shrinkBtn1').click(function() {
    $('#i1').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});
$(document).ready(function() {
  $('#shrinkBtn2').click(function() {
    $('#i2').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn3').click(function() {
    $('#i3').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn4').click(function() {
    $('#i4').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn5').click(function() {
    $('#i5').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn6').click(function() {
    $('#i6').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn7').click(function() {
    $('#i7').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn8').click(function() {
    $('#img1').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn9').click(function() {
    $('#img2').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn10').click(function() {
    $('#img3').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn11').click(function() {
    $('#img4').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn12').click(function() {
    $('#img5').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn13').click(function() {
    $('#img6').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn14').click(function() {
    $('#img7').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});

$(document).ready(function() {
  $('#shrinkBtn15').click(function() {
    $('#img8').animate({
      width: '50%',
      height: '50%'
    }, 500);
  });
});




