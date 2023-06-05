var blessed = require('reblessed');

var screen = blessed.screen({ smartCSR: true, title: 'Ravenwood Logger' }),
    body = blessed.box({
      top: 6,
      left: 0,
      width: '100%',
      height: '80%',
      scrollable: true,
      mouse: true,
      vi: true,
      keys: true,
      alwaysScroll: true,
      border: {
        type: 'line'
      },
      scrollbar: {
        style: {
          bg: 'white'
        }
      }
    }),
    statusbar = blessed.box({
        top: 0,
        left: '30%',
        width: '30%',
        height: 3,
        align: 'center',
        content: 'Ravenwood Logger (v1.0.3)',
        style: {
          fg: 'white',
          bg: 'purple'
        },
        border: {
          type: 'line'
        },
      });
    authstatusbar = blessed.box({
      top: 0,
      left: '0%',
      width: '30%',
      height: 3,
      label: ' Discord Auth ',
      style: {
        fg: 'white',
        bg: 'lightblue'
      },
      border: {
        type: 'line'
      },
    });
    successstatusbar = blessed.box({
        top: 0,
        left: '60%',
        width: '20%',
        height: 3,
        label: ' Found ',
        style: {
          fg: 'white',
          bg: '#35812e'
        },
        border: {
          type: 'line'
        },
      });
    failedstatusbar = blessed.box({
        top: 0,
        left: '80%',
        width: '20%',
        height: 3,
        label: ' Broken ',
        style: {
          fg: 'white',
          bg: '#9e1b4d'
        },
        border: {
          type: 'line'
        },
    });
    sessionsuccessstatusbar = blessed.box({
      top: 3,
      left: '60%',
      width: '20%',
      height: 3,
      label: ' Uploaded ',
      content: '0',
      style: {
        fg: 'white'
      },
      border: {
        type: 'line'
      },
    });
    totalsuccessstatusbar = blessed.box({
      top: 3,
      left: '80%',
      width: '20%',
      height: 3,
      label: ' Total ',
      content: 'Fetching...',
      style: {
        fg: 'white'
      },
      border: {
        type: 'line'
      },
  });

screen.append(sessionsuccessstatusbar);
screen.append(totalsuccessstatusbar);
screen.append(authstatusbar);
screen.append(successstatusbar);
screen.append(failedstatusbar);
screen.append(statusbar);
screen.append(body);

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

function setTotalSuccess(val) { totalsuccessstatusbar.setContent(val); screen.render(); }
function setSessionSuccess(val) { sessionsuccessstatusbar.setContent(val); screen.render(); }
function auth(text) { authstatusbar.setContent(text); screen.render(); }
function success(text) { successstatusbar.setContent(text); screen.render(); }
function failed(text) { failedstatusbar.setContent(text); screen.render(); }
function log(text) { body.insertLine(1, text); screen.render(); body.focus()}

async function uiQuestion(title, text, cb) {
    var question = blessed.prompt({
        parent: screen,
        border: 'line',
        height: 'shrink',
        width: 'half',
        top: 'center',
        left: 'center',
        label: title,
        tags: true,
        keys: true,
        vi: true,
        mouse: true,
        hidden: true
    });
    await question.input('\n  ' + text, async (err, val) => {
        question.destroy();
        screen.render();
        if (!err && await val) {
            cb(await val);
            screen.render();
        } else {
            cb(null);
            screen.render();
        }

    });
    return await question;
}




module.exports = { auth, success, failed, log, uiQuestion, setTotalSuccess, setSessionSuccess};