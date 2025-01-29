/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

function fieldValueUpdate(field, value) {
  field.doValueUpdate_(value);
  field.textElement_.innerHTML = value;
  field.widgetDispose_();
}

(function () {
  var workspace;
  document.getElementById("apply").addEventListener("click", function() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    
    const toNode = (str) => document.createRange().createContextualFragment(str)
    code = toNode(code);
    let scene = document.getElementById('paneledAscene');
   
    document.querySelectorAll('.generated').forEach((del) => {
      scene.removeChild(del);
    });

    scene.append(code);

  });



  const toolbox = {
    kind: 'flyoutToolbox',
    contents: [
      {
        kind: 'block',
        type: 'scene_block',
      },
      {
        kind: 'block',
        type: 'room_block',
        fields: {
          "room_size": "MEDIUM"
        }
      },
      {
        kind: 'block',
        type: 'box_block',
        inputs: {
          pos_x: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 0
              }
            }
          },
          pos_y: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 0
              }
            }
          },
          pos_z: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: -6
              }
            }
          },
          size_x: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 2
              }
            }
          },
          size_y: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 2
              }
            }
          },
          size_z: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 2
              }
            }
          },
          rot_x: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 0
              }
            }
          },
          rot_y: {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 0
              }
            }
          },
          rot_z : {
            shadow: {
              type: 'math_number',
              fields: {
                NUM: 0
              }
            }
          },
        }
      },
      {
        kind: 'block',
        type: 'math_number'
      }
    ],
  };

  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
    horizontalLayout: true,
    toolboxPosition: 'end',
  });
  Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),workspace);
})();


document.getElementById('paneledAscene').addEventListener("loaded", function() {
  document.getElementById('paneledAscene').components.inspector.openInspector();
});
