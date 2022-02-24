<template>
    <div class="team">
     <!-- {{team[0].short_name}} -->
                <img :src="`/img/logos/${team[0].short_name}.svg`" alt="">
              <h1>{{ team[0].short_name }}</h1>
    </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup (props) {
        //console.log(props.id)
        const teams = inject('teams')
        //console.log(teams.value)
        const team = computed(() => {
            //console.log(teams.value)
            if (teams.value === 'undefined') {
                console.log('undefined')
            } else {
                return teams.value.filter(team => {
                    //console.log(team)
                    return team.id == props.id
                })
            }
            
        })
    
        return {
            teams,
            team
        }
    }
}
</script>

<style scoped>

</style>