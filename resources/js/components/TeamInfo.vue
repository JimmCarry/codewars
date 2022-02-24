<template>
    <div>
        <img :src="`/img/logos/${team[0].short_name}.svg`" alt="">
        <span>Nets</span>
        <span>13-5</span>
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
        const stats = inject('stats')
        console.log(stats.value)
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

<style lang="scss" scoped>

</style>