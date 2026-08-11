(function () {
  'use strict';

  var CEO = { name: 'Renee Ashford', title: 'Chief Executive Officer' };

  var DIRECTORS = [
    { id: 'sales', name: 'Maria Alvarez', title: 'Director, Sales', teamSize: 5 },
    { id: 'ops', name: 'Priya Nair', title: 'Director, Operations', teamSize: 6 },
    { id: 'support', name: 'Grace Okafor', title: 'Director, Customer Support', teamSize: 2 },
    { id: 'finance', name: 'Ben Kowalski', title: 'Director, Finance', teamSize: 2 }
  ];

  var PERMISSION_COLS = ['View Staff', 'Edit Staff', 'Add/Remove Staff', 'View Salary', 'Manage Schedules', 'Export Reports'];

  var state = {
    tab: 'org',
    roles: [
      { role: 'Administrator', count: 2, perms: [true, true, true, true, true, true] },
      { role: 'Manager', count: 6, perms: [true, true, true, false, true, true] },
      { role: 'HR Coordinator', count: 2, perms: [true, true, false, true, true, false] },
      { role: 'Staff', count: 22, perms: [true, false, false, false, false, false] },
      { role: 'Read-only / Auditor', count: 3, perms: [true, false, false, false, false, true] }
    ]
  };

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var $ = function (id) { return document.getElementById(id); };
  var pageEl = document.getElementById('app');
  var orgPane = $('orgChartPane');
  var permPane = $('permissionsPane');
  var permHeadRow = document.querySelector('.perm-table thead tr');
  var permBody = $('permBody');

  // Static org tree content
  $('ceoName').textContent = CEO.name;
  $('ceoTitle').textContent = CEO.title;
  var directorsRow = $('directorsRow');
  directorsRow.innerHTML = DIRECTORS.map(function (d) {
    return (
      '<div class="org-branch">' +
        '<div class="org-connector org-connector--v"></div>' +
        '<div class="org-node"><div class="org-node__name">' + escapeHtml(d.name) + '</div><div class="org-node__title">' + escapeHtml(d.title) + '</div></div>' +
        '<div class="org-connector org-connector--v short"></div>' +
        '<div class="org-team-count">' + d.teamSize + ' staff</div>' +
      '</div>'
    );
  }).join('');

  // Permission column headers
  permHeadRow.innerHTML = '<th class="perm-role-col">Role</th>' +
    PERMISSION_COLS.map(function (col) { return '<th>' + escapeHtml(col) + '</th>'; }).join('');

  function togglePerm(roleIdx, permIdx) {
    state.roles[roleIdx].perms[permIdx] = !state.roles[roleIdx].perms[permIdx];
    renderPermissions();
  }

  function renderPermissions() {
    permBody.innerHTML = state.roles.map(function (r, ri) {
      var rowClass = ri % 2 ? 'is-odd' : '';
      var cells = r.perms.map(function (on, pi) {
        return (
          '<td class="perm-cell">' +
            '<label class="checkbox"><input type="checkbox" data-role-idx="' + ri + '" data-perm-idx="' + pi + '" ' + (on ? 'checked' : '') + '></label>' +
          '</td>'
        );
      }).join('');
      return (
        '<tr class="' + rowClass + '">' +
          '<td><div class="perm-role-name">' + escapeHtml(r.role) + '</div><div class="perm-role-count">' + r.count + ' people</div></td>' +
          cells +
        '</tr>'
      );
    }).join('');

    permBody.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
      cb.addEventListener('change', function () {
        togglePerm(Number(cb.getAttribute('data-role-idx')), Number(cb.getAttribute('data-perm-idx')));
      });
    });
  }

  function renderTabs() {
    document.querySelectorAll('.page-tab').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-tab') === state.tab);
    });
    orgPane.hidden = state.tab !== 'org';
    permPane.hidden = state.tab !== 'permissions';
  }

  document.querySelectorAll('.page-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.tab = btn.getAttribute('data-tab');
      renderTabs();
    });
  });

  var navStaffDirectory = $('navStaffDirectory');
  if (navStaffDirectory) {
    navStaffDirectory.addEventListener('click', function (e) {
      e.preventDefault();
      var url = navStaffDirectory.href;
      pageEl.classList.remove('is-visible');
      setTimeout(function () { window.location.href = url; }, 200);
    });
  }

  renderPermissions();
  renderTabs();
  requestAnimationFrame(function () { pageEl.classList.add('is-visible'); });
})();
