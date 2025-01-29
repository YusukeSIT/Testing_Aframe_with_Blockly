Blockly.Blocks['scene_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("3Dシーン スタート");
    this.appendDummyInput()
        .appendField("（スタートブロックは１つだけ配置）");
    this.appendStatementInput("SCENE")
        .setCheck(null);
    this.setColour(230);
  }
};

Blockly.Blocks['box_block'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("BOX");
    this.appendDummyInput();
    this.appendValueInput("pos_x")
        .setCheck("Number")
        .appendField("position x");
    this.appendValueInput("pos_y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("pos_z")
        .setCheck("Number")
        .appendField("z");
    this.appendEndRowInput();
    this.appendValueInput("size_x")
        .setCheck("Number")
        .appendField("size       x");
    this.appendValueInput("size_y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("size_z")
        .setCheck("Number")
        .appendField("z");
    this.appendEndRowInput();
    this.appendValueInput("rot_x")
        .setCheck("Number")
        .appendField("rotate    x");
    this.appendValueInput("rot_y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("rot_z")
        .setCheck("Number")
        .appendField("z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);

    let once = true;

    this.setOnChange(function(changeEvent) {
      if (this.getParent() != null && once) {
        let children = this.getChildren();
        let fields ={
          pos_x: children[0].inputList[0].fieldRow[0],
          pos_y: children[1].inputList[0].fieldRow[0],
          pos_z: children[2].inputList[0].fieldRow[0],
          size_x: children[3].inputList[0].fieldRow[0],
          size_y: children[4].inputList[0].fieldRow[0],
          size_z: children[5].inputList[0].fieldRow[0],
          rot_x: children[6].inputList[0].fieldRow[0],
          rot_y: children[7].inputList[0].fieldRow[0],
          rot_z: children[8].inputList[0].fieldRow[0]
        };
        Object.defineProperty(this, 'fields', {
          value: fields,
          configurable: true,
          enumerable: true,
        });

        once = false;
      }
    });
  }
};

Blockly.Blocks['room_block'] = {
  init: function() {
    this.appendEndRowInput()
        .appendField("部屋の大きさ")
        .appendField(new Blockly.FieldDropdown([["大","LARGE"], ["中","MEDIUM"], ["小","SMALL"]]), "room_size");
    this.appendEndRowInput()
        .appendField("↓アイテムをここに配置");
    this.appendStatementInput("CONTENT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("↑壁紙や床などのテクスチャをここに配置");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
  }
};