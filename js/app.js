/**
 * Created by user on 3/21/14.
 */
$(function(){
    var AppRouter = Backbone.Router.extend({
        routes:{
            "today": "today",
            "inbox": "inbox",
            "calendar": "calendar",
            "tasks": "tasks"
        },

        unselectBox: function(){
            $('li').removeClass('active');
        },

        selectBox: function(item){
            this.unselectBox();
            $(item).addClass('active');
        },

        hideLayouts: function(){
            $('div.layers').hide();
        },

        showLayouts: function(layout){
            this.hideLayouts();
            $(layout).show();
        },

        today: function(){
            this.showLayouts('#calendar-layer');
            this.selectBox('#li_today')
        },

        inbox: function(){
            this.showLayouts('#mail-layer');
            this.selectBox('#show_inbox');
        },

        calendar: function(){
            this.showLayouts('div#calendar-layer');
            this.selectBox('#show_calendar')
        },

        tasks: function(){
            this.showLayouts('div#tasks-layer');
            this.selectBox('#show_tasks');
        }
    });

    var AppView = Backbone.View.extend({
//        el: $('div#container div.content'),
        el: $('body'),

        events:{
            'click li#li_today': 'displayTodayCalendar',
            'click li#show_inbox': 'displayInbox',
            'click li#show_calendar': 'displayCalendar',
            'click li#show_tasks': 'displayTasks'
        },

        initialize: function(){
            this.router = new AppRouter();
            Backbone.history.start();
        },

        displayTodayCalendar: function(){
            this.router.navigate("today", true);
        },

        displayInbox: function(){
            this.router.navigate("inbox", true);
        },

        displayCalendar: function(){
            this.router.navigate("calendar", true);
        },

        displayTasks: function(){
            this.router.navigate("tasks", true);
        }
    });
    new AppView();
});