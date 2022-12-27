  var mother = function (spec) {
    // 상속을 하기 위한 속성을 담는 객체를 생성합니다
    var that = {};
    // 상속하려는 메소드를 추가합니다
    that.get_name = function () {
      return spec.name;
    };
    that.get_ability = function () {
      return spec.ability;
    };

    // 코드 마지막에 생성했던 객체를 반환합니다
    return that;
  };

  var mom = mother({ name: "mom", ability: "cooking" });
  console.log(mom.get_name()); // mom

  Object.prototype.super = function (name) {
    // 호출한 객체를 that에 할당합니다
    var that = this;
    // 객체에서 이름으로 메소드를 찾아옵니다
    var method = that[name];

    // 찾아온 메소드를 실행할 때, 호출객체와 매개변수를 활용합니다
    return function () {
      return method.apply(that, arguments);
    };
  };
  var daughter = function (spec) {
    spec.ability = spec.ability || "game";
    var that = mother(spec);
    // 부모객체의 메소드를 찾아서 가져온다
    var super_get_ability = that.super("get_ability");
    //get_ability 함수를 재정의 한다
    that.get_ability = function () {
      return "this is new ability " + super_get_ability();
    };
    return that;
  };
  var myDaughter = daughter({ name: "daughter" });
  myDaughter.get_ability(); // this is new ability game
