// bindAll
// 기존 메소드를 덮어 쓰면서 개체의 메서드를 개체 자체에 바인딩합니다.
//
// Array.forEach()를 사용하여 Function.apply()를 사용하는 함수를 반환하여 지정된 각 함수에 대해 지정된 컨텍스트 (obj)를 fn에 적용합니다.

const bindAll = (obj, ...fns) => 
  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );

// 예시
var view = {
  label: 'docs',
  click: function() {
    console.log('clicked' + this.label);
  }
};
bindAll(view, 'click');
jQuery(element).on('click', view.click);  // Logs 'click docks' when clicked.