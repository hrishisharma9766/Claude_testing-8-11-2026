(function () {
  'use strict';

  var DEPARTMENTS = ['Sales', 'Operations', 'Customer Support', 'Warehouse', 'Finance', 'HR'];
  var LOCATIONS = ['Headquarters – Denver', 'Chicago Hub', 'Austin Store', 'Remote'];

  var STATUS_STYLES = {
    'Active': { bg: 'var(--colors-primitive-color-tokens-lime-100)', color: 'var(--colors-primitive-color-tokens-lime-800)' },
    'On Leave': { bg: 'var(--colors-primitive-color-tokens-orange-100)', color: 'var(--colors-primitive-color-tokens-orange-700)' },
    'Terminated': { bg: 'var(--colors-primitive-color-tokens-red-100)', color: 'var(--colors-primitive-color-tokens-red-700)' }
  };

  var SEED = [
    { id: 1, name: 'Maria Alvarez', email: 'maria.alvarez@northlane.com', phone: '(303) 555-0142', role: 'Store Manager', department: 'Sales', location: 'Headquarters – Denver', status: 'Active', schedule: 'Mon–Fri, 9am–5pm', salary: 78000, hireDate: '2019-03-11' },
    { id: 2, name: 'Devon Carter', email: 'devon.carter@northlane.com', phone: '(303) 555-0198', role: 'Sales Associate', department: 'Sales', location: 'Headquarters – Denver', status: 'Active', schedule: 'Tue–Sat, 10am–6pm', salary: 42000, hireDate: '2022-06-02' },
    { id: 3, name: 'Priya Nair', email: 'priya.nair@northlane.com', phone: '(312) 555-0110', role: 'Operations Lead', department: 'Operations', location: 'Chicago Hub', status: 'Active', schedule: 'Mon–Fri, 8am–4pm', salary: 71000, hireDate: '2020-01-15' },
    { id: 4, name: 'Jamal Whitfield', email: 'jamal.whitfield@northlane.com', phone: '(312) 555-0177', role: 'Warehouse Associate', department: 'Warehouse', location: 'Chicago Hub', status: 'On Leave', schedule: 'Mon–Fri, 6am–2pm', salary: 39500, hireDate: '2021-09-20' },
    { id: 5, name: 'Emily Sato', email: 'emily.sato@northlane.com', phone: '(512) 555-0163', role: 'Customer Support Rep', department: 'Customer Support', location: 'Austin Store', status: 'Active', schedule: 'Mon–Fri, 11am–7pm', salary: 41000, hireDate: '2023-02-27' },
    { id: 6, name: 'Carlos Mendez', email: 'carlos.mendez@northlane.com', phone: '(512) 555-0184', role: 'Finance Analyst', department: 'Finance', location: 'Headquarters – Denver', status: 'Active', schedule: 'Mon–Fri, 9am–5pm', salary: 68000, hireDate: '2018-11-05' },
    { id: 7, name: 'Sarah Klein', email: 'sarah.klein@northlane.com', phone: '(303) 555-0121', role: 'HR Coordinator', department: 'HR', location: 'Headquarters – Denver', status: 'Active', schedule: 'Mon–Fri, 9am–5pm', salary: 54000, hireDate: '2021-04-19' },
    { id: 8, name: 'Tyler Brooks', email: 'tyler.brooks@northlane.com', phone: '(512) 555-0199', role: 'Warehouse Supervisor', department: 'Warehouse', location: 'Austin Store', status: 'Active', schedule: 'Mon–Fri, 6am–2pm', salary: 58000, hireDate: '2017-08-08' },
    { id: 9, name: 'Nina Petrova', email: 'nina.petrova@northlane.com', phone: '(303) 555-0155', role: 'Sales Associate', department: 'Sales', location: 'Remote', status: 'On Leave', schedule: 'Wed–Sun, 10am–6pm', salary: 40500, hireDate: '2022-10-10' },
    { id: 10, name: 'Owen Fitzgerald', email: 'owen.fitzgerald@northlane.com', phone: '(312) 555-0133', role: 'Operations Analyst', department: 'Operations', location: 'Chicago Hub', status: 'Active', schedule: 'Mon–Fri, 8am–4pm', salary: 61000, hireDate: '2020-07-01' },
    { id: 11, name: 'Grace Okafor', email: 'grace.okafor@northlane.com', phone: '(512) 555-0148', role: 'Customer Support Lead', department: 'Customer Support', location: 'Austin Store', status: 'Active', schedule: 'Mon–Fri, 11am–7pm', salary: 52000, hireDate: '2019-05-23' },
    { id: 12, name: 'Ben Kowalski', email: 'ben.kowalski@northlane.com', phone: '(303) 555-0167', role: 'Finance Manager', department: 'Finance', location: 'Headquarters – Denver', status: 'Active', schedule: 'Mon–Fri, 9am–5pm', salary: 89000, hireDate: '2016-02-14' },
    { id: 13, name: 'Alicia Moreno', email: 'alicia.moreno@northlane.com', phone: '(303) 555-0189', role: 'HR Generalist', department: 'HR', location: 'Remote', status: 'Terminated', schedule: 'Mon–Fri, 9am–5pm', salary: 49000, hireDate: '2020-12-01' },
    { id: 14, name: 'Marcus Lee', email: 'marcus.lee@northlane.com', phone: '(312) 555-0122', role: 'Warehouse Associate', department: 'Warehouse', location: 'Chicago Hub', status: 'Active', schedule: 'Mon–Fri, 6am–2pm', salary: 38000, hireDate: '2023-06-19' },
    { id: 15, name: 'Hannah Reyes', email: 'hannah.reyes@northlane.com', phone: '(512) 555-0176', role: 'Sales Associate', department: 'Sales', location: 'Austin Store', status: 'Active', schedule: 'Tue–Sat, 10am–6pm', salary: 41500, hireDate: '2021-01-11' },
    { id: 16, name: 'Ibrahim Haddad', email: 'ibrahim.haddad@northlane.com', phone: '(303) 555-0193', role: 'Operations Coordinator', department: 'Operations', location: 'Headquarters – Denver', status: 'Active', schedule: 'Mon–Fri, 8am–4pm', salary: 47000, hireDate: '2022-03-08' }
  ];

  function initials(name) {
    return name.split(' ').map(function (p) { return p[0]; }).join('').slice(0, 2).toUpperCase();
  }
  function fmtSalary(n) {
    return '$' + Number(n).toLocaleString('en-US');
  }
  function fmtDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    return String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0') + '-' + d.getFullYear();
  }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var state = {
    staff: SEED.slice(),
    query: '',
    deptFilter: 'All',
    locFilter: 'All',
    statusFilter: 'All',
    selected: [],
    sortKey: 'name',
    sortDir: 'asc',
    drawerId: null,
    drawerTab: 'overview',
    showAddModal: false
  };

  function getFiltered() {
    var q = state.query.trim().toLowerCase();
    return state.staff.filter(function (m) {
      return (state.deptFilter === 'All' || m.department === state.deptFilter) &&
        (state.locFilter === 'All' || m.location === state.locFilter) &&
        (state.statusFilter === 'All' || m.status === state.statusFilter) &&
        (!q || m.name.toLowerCase().indexOf(q) !== -1 || m.role.toLowerCase().indexOf(q) !== -1 || m.email.toLowerCase().indexOf(q) !== -1);
    });
  }

  function getSorted(list) {
    var key = state.sortKey;
    var dir = state.sortDir === 'asc' ? 1 : -1;
    return list.slice().sort(function (a, b) {
      var av = a[key], bv = b[key];
      if (typeof av === 'number') return (av - bv) * dir;
      return String(av).localeCompare(String(bv)) * dir;
    });
  }

  // ---- DOM refs ----
  var $ = function (id) { return document.getElementById(id); };
  var pageEl = document.getElementById('app');
  var searchInput = $('searchInput');
  var tableBody = $('tableBody');
  var selectAllCheckbox = $('selectAllCheckbox');
  var bulkBar = $('bulkBar');
  var bulkCount = $('bulkCount');
  var summaryLine = $('summaryLine');
  var rowCountLine = $('rowCountLine');
  var drawerOverlay = $('drawerOverlay');
  var drawer = $('drawer');
  var drawerBody = $('drawerBody');
  var modalOverlay = $('modalOverlay');

  // ---- Custom dropdown component ----
  function createDropdown(container, opts) {
    var isOpen = false;
    var value = opts.value;
    container.classList.add('dd');
    container.innerHTML =
      '<div class="dd__control" tabindex="0">' +
        '<span class="dd__value"></span>' +
        '<span class="dd__caret"><svg width="9" height="5" viewBox="0 0 9 5" fill="none"><path d="M0.646446 0.646446C0.841708 0.451184 1.15829 0.451184 1.35355 0.646446L4.5 3.79289L7.64644 0.646446C7.84171 0.451184 8.15829 0.451184 8.35355 0.646446C8.54882 0.841708 8.54882 1.15829 8.35355 1.35355L4.85355 4.85355C4.65829 5.04882 4.34171 5.04882 4.14644 4.85355L0.646446 1.35355C0.451184 1.15829 0.451184 0.841708 0.646446 0.646446Z" fill="currentColor"></path></svg></span>' +
      '</div>' +
      '<div class="dd__menu" hidden></div>';

    var control = container.querySelector('.dd__control');
    var valueEl = container.querySelector('.dd__value');
    var menu = container.querySelector('.dd__menu');

    function renderValue() {
      var opt = opts.options.find(function (o) { return o.value === value; });
      valueEl.textContent = opt ? opt.label : opts.placeholder;
      valueEl.classList.toggle('dd__value--placeholder', !opt);
    }

    function renderMenu() {
      menu.innerHTML = '';
      opts.options.forEach(function (opt) {
        var item = document.createElement('div');
        item.className = 'dd__option' + (opt.value === value ? ' is-selected' : '');
        item.textContent = opt.label;
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          value = opt.value;
          renderValue();
          close();
          opts.onChange(value);
        });
        menu.appendChild(item);
      });
    }

    function open() {
      isOpen = true;
      container.classList.add('is-open');
      renderMenu();
      menu.hidden = false;
      document.addEventListener('mousedown', onDocClick);
    }
    function close() {
      isOpen = false;
      container.classList.remove('is-open');
      menu.hidden = true;
      document.removeEventListener('mousedown', onDocClick);
    }
    function onDocClick(e) {
      if (!container.contains(e.target)) close();
    }

    control.addEventListener('click', function () {
      isOpen ? close() : open();
    });

    renderValue();

    return {
      setValue: function (v) { value = v; renderValue(); }
    };
  }

  var deptDropdown = createDropdown($('deptDropdown'), {
    placeholder: 'Department',
    options: [{ value: 'All', label: 'All Departments' }].concat(DEPARTMENTS.map(function (d) { return { value: d, label: d }; })),
    value: 'All',
    onChange: function (v) { state.deptFilter = v; render(); }
  });
  var locDropdown = createDropdown($('locDropdown'), {
    placeholder: 'Location',
    options: [{ value: 'All', label: 'All Locations' }].concat(LOCATIONS.map(function (l) { return { value: l, label: l }; })),
    value: 'All',
    onChange: function (v) { state.locFilter = v; render(); }
  });

  // Add-staff modal selects
  var addDeptSelect = $('addDept');
  var addLocSelect = $('addLoc');
  DEPARTMENTS.forEach(function (d) {
    var o = document.createElement('option'); o.value = d; o.textContent = d; addDeptSelect.appendChild(o);
  });
  LOCATIONS.forEach(function (l) {
    var o = document.createElement('option'); o.value = l; o.textContent = l; addLocSelect.appendChild(o);
  });

  // ---- Search ----
  searchInput.addEventListener('input', function (e) {
    state.query = e.target.value;
    render();
  });

  // ---- Status filter buttons ----
  var filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.statusFilter = btn.getAttribute('data-status');
      render();
    });
  });

  // ---- Sorting ----
  document.querySelectorAll('.staff-table th.sortable').forEach(function (th) {
    th.addEventListener('click', function () {
      var key = th.getAttribute('data-sort');
      if (state.sortKey === key) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = key;
        state.sortDir = 'asc';
      }
      render();
    });
  });

  // ---- Select all ----
  selectAllCheckbox.addEventListener('change', function (e) {
    var checked = e.target.checked;
    var visibleIds = getFiltered().map(function (m) { return m.id; });
    if (checked) {
      var set = new Set(state.selected.concat(visibleIds));
      state.selected = Array.from(set);
    } else {
      var remove = new Set(visibleIds);
      state.selected = state.selected.filter(function (id) { return !remove.has(id); });
    }
    render();
  });

  function toggleSelect(id) {
    var idx = state.selected.indexOf(id);
    if (idx === -1) state.selected.push(id); else state.selected.splice(idx, 1);
    render();
  }

  // ---- Bulk actions ----
  $('bulkClearBtn').addEventListener('click', function () { state.selected = []; render(); });
  $('bulkLeaveBtn').addEventListener('click', function () {
    var sel = new Set(state.selected);
    state.staff.forEach(function (m) { if (sel.has(m.id)) m.status = 'On Leave'; });
    state.selected = [];
    render();
  });
  $('bulkDeleteBtn').addEventListener('click', function () {
    var sel = new Set(state.selected);
    state.staff = state.staff.filter(function (m) { return !sel.has(m.id); });
    state.selected = [];
    render();
  });

  // ---- Drawer ----
  function openDrawer(id) {
    state.drawerId = id;
    state.drawerTab = 'overview';
    render();
  }
  function closeDrawer() {
    state.drawerId = null;
    render();
  }
  drawerOverlay.addEventListener('click', closeDrawer);
  $('drawerCloseBtn').addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      state.drawerTab = tab.getAttribute('data-tab');
      render();
    });
  });

  // ---- Add staff modal ----
  function resetAddForm() {
    $('addName').value = '';
    $('addEmail').value = '';
    $('addRole').value = '';
    addDeptSelect.value = DEPARTMENTS[0];
    addLocSelect.value = LOCATIONS[0];
    $('addStatus').value = 'Active';
    $('addSchedule').value = '';
    $('addHire').value = '';
    $('addSalary').value = '';
  }
  function openAddModal() {
    state.showAddModal = true;
    render();
  }
  function closeAddModal() {
    state.showAddModal = false;
    resetAddForm();
    render();
  }
  $('addStaffBtn').addEventListener('click', openAddModal);
  $('addCancelBtn').addEventListener('click', closeAddModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeAddModal();
  });
  $('addModal').addEventListener('click', function (e) { e.stopPropagation(); });

  $('addSaveBtn').addEventListener('click', function () {
    var name = $('addName').value.trim();
    if (!name) return;
    var newStaff = {
      id: state.staff.reduce(function (max, m) { return Math.max(max, m.id); }, 0) + 1,
      name: name,
      email: $('addEmail').value.trim() || 'unknown@northlane.com',
      phone: '—',
      role: $('addRole').value.trim() || 'Staff',
      department: addDeptSelect.value,
      location: addLocSelect.value,
      status: $('addStatus').value,
      schedule: $('addSchedule').value.trim() || '—',
      salary: Number($('addSalary').value) || 0,
      hireDate: $('addHire').value || new Date().toISOString().slice(0, 10)
    };
    state.staff.unshift(newStaff);
    closeAddModal();
  });

  // Export is a static prototype action, no-op placeholder.
  $('exportBtn').addEventListener('click', function () {
    window.alert('Export is not available in this preview.');
  });

  // ---- Render ----
  function render() {
    var filtered = getFiltered();
    var sorted = getSorted(filtered);

    // Summary
    var deptCount = DEPARTMENTS.length;
    var locCount = LOCATIONS.length;
    summaryLine.textContent = state.staff.length + ' staff · ' + deptCount + ' departments · ' + locCount + ' locations';
    $('statTotal').textContent = state.staff.length;
    $('statActive').textContent = state.staff.filter(function (m) { return m.status === 'Active'; }).length;
    $('statLeave').textContent = state.staff.filter(function (m) { return m.status === 'On Leave'; }).length;
    $('statDept').textContent = deptCount;

    // Bulk bar
    if (state.selected.length > 0) {
      bulkBar.hidden = false;
      bulkCount.textContent = state.selected.length + ' selected';
    } else {
      bulkBar.hidden = true;
    }

    // Filter button states
    filterButtons.forEach(function (btn) {
      btn.classList.toggle('is-selected', btn.getAttribute('data-status') === state.statusFilter);
    });

    // Sort arrows
    document.querySelectorAll('.arrow').forEach(function (el) {
      var key = el.getAttribute('data-arrow');
      el.textContent = state.sortKey === key ? (state.sortDir === 'asc' ? '↑' : '↓') : '';
    });

    // Select all checkbox state
    var visibleIds = filtered.map(function (m) { return m.id; });
    selectAllCheckbox.checked = visibleIds.length > 0 && visibleIds.every(function (id) { return state.selected.indexOf(id) !== -1; });

    // Table rows
    tableBody.innerHTML = sorted.map(function (m, i) {
      var st = STATUS_STYLES[m.status] || STATUS_STYLES['Active'];
      var isSelected = state.selected.indexOf(m.id) !== -1;
      var rowClass = isSelected ? 'is-selected' : (i % 2 ? 'is-odd' : '');
      return (
        '<tr class="' + rowClass + '" data-id="' + m.id + '">' +
          '<td class="col-check" data-role="check"><label class="checkbox"><input type="checkbox" data-role="row-check" ' + (isSelected ? 'checked' : '') + '></label></td>' +
          '<td data-role="open">' +
            '<div class="name-cell">' +
              '<span class="avatar">' + escapeHtml(initials(m.name)) + '</span>' +
              '<div><div class="name-cell__name">' + escapeHtml(m.name) + '</div><div class="name-cell__email">' + escapeHtml(m.email) + '</div></div>' +
            '</div>' +
          '</td>' +
          '<td data-role="open">' + escapeHtml(m.role) + '</td>' +
          '<td data-role="open">' + escapeHtml(m.department) + '</td>' +
          '<td data-role="open">' + escapeHtml(m.location) + '</td>' +
          '<td data-role="open">' + escapeHtml(m.schedule) + '</td>' +
          '<td class="align-right" data-role="open">' + fmtSalary(m.salary) + '</td>' +
          '<td data-role="open"><span class="badge" style="background:' + st.bg + ';color:' + st.color + ';">' + escapeHtml(m.status) + '</span></td>' +
          '<td class="nowrap" data-role="open">' + fmtDate(m.hireDate) + '</td>' +
          '<td class="col-view" data-role="view">' +
            '<button class="icon-btn" type="button" title="View" data-role="view-btn">' +
              '<svg width="15" height="15" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="7" cy="7" r="2"></circle><path d="M1 7s2.5-4 6-4 6 4 6 4-2.5 4-6 4-6-4-6-4Z"></path></svg>' +
            '</button>' +
          '</td>' +
        '</tr>'
      );
    }).join('');

    rowCountLine.textContent = 'Showing ' + sorted.length + ' of ' + state.staff.length;

    // Row interactions
    tableBody.querySelectorAll('tr').forEach(function (tr) {
      var id = Number(tr.getAttribute('data-id'));
      tr.addEventListener('click', function () { openDrawer(id); });
      var checkbox = tr.querySelector('[data-role="row-check"]');
      var checkCell = tr.querySelector('[data-role="check"]');
      checkCell.addEventListener('click', function (e) { e.stopPropagation(); });
      checkbox.addEventListener('change', function () { toggleSelect(id); });
      var viewCell = tr.querySelector('[data-role="view"]');
      viewCell.addEventListener('click', function (e) { e.stopPropagation(); openDrawer(id); });
    });

    // Drawer
    var drawerMember = state.drawerId ? state.staff.find(function (m) { return m.id === state.drawerId; }) : null;
    if (drawerMember) {
      drawerOverlay.hidden = false;
      drawer.hidden = false;
      $('drawerInitials').textContent = initials(drawerMember.name);
      $('drawerName').textContent = drawerMember.name;
      $('drawerRole').textContent = drawerMember.role;

      document.querySelectorAll('.drawer-tab').forEach(function (tab) {
        tab.classList.toggle('is-active', tab.getAttribute('data-tab') === state.drawerTab);
      });

      var st = STATUS_STYLES[drawerMember.status] || STATUS_STYLES['Active'];
      if (state.drawerTab === 'overview') {
        drawerBody.innerHTML =
          '<div><div class="detail-block__label">Status</div><span class="badge" style="background:' + st.bg + ';color:' + st.color + ';">' + escapeHtml(drawerMember.status) + '</span></div>' +
          '<div><div class="detail-block__label">Department</div><div class="detail-block__value">' + escapeHtml(drawerMember.department) + '</div></div>' +
          '<div><div class="detail-block__label">Location</div><div class="detail-block__value">' + escapeHtml(drawerMember.location) + '</div></div>' +
          '<div><div class="detail-block__label">Email</div><div class="detail-block__value">' + escapeHtml(drawerMember.email) + '</div></div>' +
          '<div><div class="detail-block__label">Phone</div><div class="detail-block__value">' + escapeHtml(drawerMember.phone) + '</div></div>' +
          '<div><div class="detail-block__label">Hire date</div><div class="detail-block__value">' + fmtDate(drawerMember.hireDate) + '</div></div>';
      } else if (state.drawerTab === 'schedule') {
        drawerBody.innerHTML =
          '<div><div class="detail-block__label">Shift pattern</div><div class="detail-block__value">' + escapeHtml(drawerMember.schedule) + '</div></div>' +
          '<div><div class="detail-block__label">Location</div><div class="detail-block__value">' + escapeHtml(drawerMember.location) + '</div></div>' +
          '<div class="detail-note">Weekly schedule editing is available from the shift planner.</div>';
      } else {
        drawerBody.innerHTML =
          '<div><div class="detail-block__label">Annual salary</div><div class="detail-block__value detail-block__value--lg">' + fmtSalary(drawerMember.salary) + '</div></div>' +
          '<div><div class="detail-block__label">Pay type</div><div class="detail-block__value">Salaried · biweekly</div></div>';
      }
    } else {
      drawerOverlay.hidden = true;
      drawer.hidden = true;
    }

    // Add-staff modal
    modalOverlay.hidden = !state.showAddModal;
  }

  var navOrgChart = $('navOrgChart');
  if (navOrgChart) {
    navOrgChart.addEventListener('click', function (e) {
      e.preventDefault();
      var url = navOrgChart.href;
      pageEl.classList.remove('is-visible');
      setTimeout(function () { window.location.href = url; }, 200);
    });
  }

  requestAnimationFrame(function () { pageEl.classList.add('is-visible'); });
  render();
})();
