
//  シーンブロック制御部
javascript.javascriptGenerator.forBlock['scene_block'] = function(block, generator) {
  const statements_name1 = generator.statementToCode(block, 'SCENE');

  let code = "";  //codeの初期化
  // 3Dmodel がある場合、<a-assets>を作成する
  const myStatements1 = statements_name1.split("\n");
  for(let i=0; i<myStatements1.length;i++){
      if(myStatements1[i].indexOf("3Dmodel") > 0){
          if(code.indexOf("<a-assets>") < 0){ //<a-assets>　があるかどうか
              code = code + "<a-assets class='generated'>\n";   //初回は<a-assets>　をつける
          }else{
              code = code.replace("</a-assets>\n","");//2回目以降は　削除
          };
          code = code + "<a-asset-item ";
          code = code + myStatements1[i].replace("//3Dmodel","");
          code = code + "></a-asset-item>\n";
          code = code + "</a-assets>\n";
      };
  };
  // 内側のブロックを読み込む
  for(let i=0; i<myStatements1.length;i++){
      if(myStatements1[i].indexOf("3Dmodel") < 0){
          code = code + myStatements1[i] + "\n";
      };
  };
  return code;
};

//ボックスブロック制御部
javascript.javascriptGenerator.forBlock['box_block'] = function(block, generator) {
  //  ブロックから座標を読み取る
  let value_pos_x = generator.valueToCode(block, 'pos_x', javascript.Order.ATOMIC);
  value_pos_x = value_pos_x.replace(/\(/, '');
  value_pos_x = value_pos_x.replace(/\)/, '');

  let value_pos_y = generator.valueToCode(block, 'pos_y', javascript.Order.ATOMIC);
  value_pos_y = value_pos_y.replace(/\(/, '');
  value_pos_y = value_pos_y.replace(/\)/, '');

  let value_pos_z = generator.valueToCode(block, 'pos_z', javascript.Order.ATOMIC);
  value_pos_z = value_pos_z.replace(/\(/, '');
  value_pos_z = value_pos_z.replace(/\)/, '');

  //  ブロックからサイズを読み取る
  let value_size_x = generator.valueToCode(block, 'size_x', javascript.Order.ATOMIC);
  value_size_x = value_size_x.replace(/\(/, '');
  value_size_x = value_size_x.replace(/\)/, '');

  let value_size_y = generator.valueToCode(block, 'size_y', javascript.Order.ATOMIC);
  value_size_y = value_size_y.replace(/\(/, '');
  value_size_y = value_size_y.replace(/\)/, '');

  let value_size_z = generator.valueToCode(block, 'size_z', javascript.Order.ATOMIC);
  value_size_z = value_size_z.replace(/\(/, '');
  value_size_z = value_size_z.replace(/\)/, '');

  //  ブロックから傾きを読み取る
  let value_rot_x = generator.valueToCode(block, 'rot_x', javascript.Order.ATOMIC);
  value_rot_x = value_rot_x.replace(/\(/, '');
  value_rot_x = value_rot_x.replace(/\)/, '');

  let value_rot_y = generator.valueToCode(block, 'rot_y', javascript.Order.ATOMIC);
  value_rot_y = value_rot_y.replace(/\(/, '');
  value_rot_y = value_rot_y.replace(/\)/, '');

  let value_rot_z = generator.valueToCode(block, 'rot_z', javascript.Order.ATOMIC);
  value_rot_z = value_rot_z.replace(/\(/, '');
  value_rot_z = value_rot_z.replace(/\)/, '');

　//  <a-box> を作成
  let code = "<a-box id='" + block.id +"' class='generated'" + 
    " position='" + value_pos_x + " " + value_pos_y + " " + value_pos_z + 
    "' scale='" + value_size_x + " " + value_size_y + " " + value_size_z + 
    "' rotation='" + value_rot_x + " " + value_rot_y + " " + value_rot_z + "'>\n";
  //  数値の表現をa-frame仕様に修正
  code = code + "</a-box>";

  return code;
};

javascript.javascriptGenerator.forBlock['room_block'] = function(block, generator) {
  const dropdown_room_size = block.getFieldValue('room_size');
  const statements_name2 = generator.statementToCode(block, 'CONTENT');

  let code = "";
  const myStatements2 = statements_name2.split("\n");
  // 内側のブロックを見込む
  for(let i=0; i<myStatements2.length;i++){
      if(myStatements2[i].indexOf("3Dmodel") < 0){
          code = code + myStatements2[i] + "\n";
      };
  };
  return code;
}